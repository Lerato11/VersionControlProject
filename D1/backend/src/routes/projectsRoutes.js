const express = require("express");

const { getProjects, 
    getUserProjects, 
    getProjectById, 
    addProject, 
    updateProject, 
    checkOutProject, 
    checkInProject, 
    addProjectMember, 
    removeProjectMember, 
    getNextProjectId, 
    removeProject,
    updateProjectImage,
    leaveProject
} = require("../models/projectsModel");

const { getUserById, addUserProject, removeUserProject } = require("../models/usersModel");

const router = express.Router();

const { uploadImage, uploadFile } = require("../utils/fileUploads");

const multer = require("multer");
const path = require("path");
const fs = require("fs");



// get all projects
router.get("/", async (req, res) => {

    try {
        const projects = await getProjects();
        res.json(projects);

    } catch (err) {

        res.status(500).json({
             error: err.message 
        });
    }
});



// get user projects (home)
router.get("/user", async (req, res) => {

    try {
        // get id from local storage
        const {id: idString} = req.query; // for testing
        const id = Number(idString);

        if (!id) {

            return res.status(400).json({
                    success: false,
                    message: "Missing logged in user id" 
                });
            }

        const user = await getUserById(id);
        

        if (!user) {

            return res.status(404).json({
                    success: false,
                    message: "User not found" 
                });
            }

    
        const projects = await getUserProjects(id);
         res.json({ 
            success: true,
             projects 
        });

    } catch (err) {

        res.status(500).json({
             error: err.message 
            });
    }
});


// get project
router.get("/:id", async (req, res) => {

    try{
        // get id from local storage
        const {id} = req.params; // for testing

        const project = await getProjectById(Number(id));

        if (!project) {

            return res.status(401).json({
                    success: false,
                    message: "Invalid Project Id" 
                });
            }


        res.json({
            success: true,
            message: "Retrieved Project successfully", 
            project 
        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});


// update project
router.put("/:id", async (req, res) => {

    const idNum = parseInt(req.params.id);
    const {updates} = req.body;

    try{
        const project = await updateProject(idNum, updates);

        if (!project) {

            return res.status(401).json({
                    success: false,
                    message: "Invalid Project Id" 
                });
            }

        res.json({
            success: true,
            message: "Project Updated Successfully", 
            project 
        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});


// update project image
router.patch("/projectImage", uploadImage.single("image"), async (req, res) => {
    // console.log("Test");

    // return res.status(401).json({
    //                 success: false,
    //                 message: "Invalid Project Idsssss" 
    //             });
            
    const { idNum } = req.body;
    const id = parseInt(idNum);

    const imagePath = `/assets/images/${req.file.filename}`;
    

    console.log("routes: "+ imagePath)

    if (isNaN(id) || !imagePath) {
        return res.status(400).json({ success: false, message: "Invalid ID or missing image path." });
    }


    try{
        const project = await updateProjectImage(id, imagePath);


        if (!project || project.id != id) {

            return res.status(401).json({
                    success: false,
                    message: "Invalid Project Id" 
                });
            }

        res.json({
            success: true,
            message: "Project Image Updated Successfully", 
            project 
        });

    }
     catch (err) {
        console.log(err);

        res.status(500).json({
             error: err.message 
        
        });
    }
});

// leave a project
router.post("/leave/:projectId", async (req, res) => {
    const projectId = parseInt(req.params.projectId);
    const { userId } = req.body;

    try {
        await leaveProject(userId, projectId);

        res.json({
            success: true,
            message: "You have left the project successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


// check in project
router.put("/checkIn/:id", async (req, res) => {

    const idNum = parseInt(req.params.id);
    const {userId, message} = req.body;

    try{
        // check if valid project
        const project = await getProjectById(idNum);

        if (!project) {

            return res.status(401).json({
                    success: false,
                    message: "Invalid Project Id" 
            });
        }


        if(project.checkedOutBy != userId){ // not checked out by this user
            return res.status(401).json({
                    success: false,
                    message: "User did not check this project out" 
            });
        }

        const checkIn = await checkInProject(idNum, userId, message);

        res.json({
            success: true,
            message: `Project ${project.name} Checked in Successfully by ${userId}`,
            checkIn 

        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});


// check out project
router.put("/checkOut/:id", async (req, res) => {

    const idNum = parseInt(req.params.id);
    const {userId, message} = req.body;

    try{
        // check if valid project
        const project = await getProjectById(idNum);

        if (!project) {

            return res.status(401).json({
                    success: false,
                    message: "Invalid Project Id" 
            });
        }


        if(project.checkedOutBy != null){ // not checked out by this user
            return res.status(401).json({
                    success: false,
                    message: "Project is already checked out" 
            });
        }

        const checkOut = await checkOutProject(idNum, userId, message);

        res.json({
            success: true,
            message: `Project ${project.name} Checked Out Successfully by ${userId}`,
            checkOut 

        });

    }
     catch (err) {
        // console.log(err)

        res.status(500).json({
             error: err.message 
        });
    }
});


// add a user as memmber to project
router.put("/addMember/:id", async (req, res) => {

    const idNum = parseInt(req.params.id);
    const {addedMemberId, addingMemberId} = req.body;


    try{
        const project = await getProjectById(idNum);

        // if valid project
        if (!project) {

            return res.status(401).json({
                    success: false,
                    message: "Project not found" 
                });
        }


        // if user adding is a member
        if (!project.members.includes(addingMemberId)) {

            return res.status(401).json({
                    success: false,
                    message: "You are not a member of this project, cannot add others" 
            });
        }

        // if user being added is already member
        if (project.members.includes(addedMemberId)) {

            return res.status(401).json({
                    success: false,
                    message: "User is already a member" 
            });
        }

        const addedMember = await addProjectMember(idNum, addedMemberId);
        const addedProject = await addUserProject(addedMemberId, idNum);

        res.json({
            success: true,
            message: `Member ${addingMemberId} added user ${addedMemberId} successfully`, 
            addedMember 
        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});



// remove a user as memmber to project
router.put("/removeMember/:id", async (req, res) => {

    const idNum = parseInt(req.params.id);
    const {removingMemberId, removedMemberId} = req.body;


    try{
        const project = await getProjectById(idNum);

        // if valid project
        if (!project) {

            return res.status(401).json({
                    success: false,
                    message: "Project not found" 
                });
        }


        // if user adding is a member
        if (!project.members.includes(removingMemberId)) {

            return res.status(401).json({
                    success: false,
                    message: "You are not a member of this project, cannot remove others" 
            });
        }

        // if user being added is already not a member
        if (!project.members.includes(removedMemberId)) {

            return res.status(401).json({
                    success: false,
                    message: "User is already not a member" 
            });
        }

        const removedMember = await removeProjectMember(idNum, removedMemberId);
        const removedProject = await removeUserProject(removedMemberId, idNum);


        
        res.json({
            success: true,
            message: `Member ${removingMemberId} removed user ${removedMemberId} successfully`, 
            removedMember 
        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});


// add project
router.post("/", async (req, res) => {

    const {name, languages, hashtags, version, type, description, userId} = req.body;

    try{

        const newProject = {
            id: await getNextProjectId(),
            name,
            languages, 
            hashtags, 
            version, 
            type, 
            description,
            activities: [],
            files: [],
            status: "Checked In",
            members: [userId],
            checkedOutBy: null,
            projectImage: "/assets/images/placeholder.png",
            createdAt: new Date()

        };

        const createdProject = await addProject(newProject);

        await addUserProject(userId, newProject.id);

        // console.log("--------")
        // console.log(createdProject);

        res.json({
            success: true,
            message: `Project successfully added`,
            createdProject 

        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});


// remove project
router.delete("/:id", async (req, res) => {

    const idNum = parseInt(req.params.id);
    
    try{

        const project = await getProjectById(idNum);

        // if valid project
        if (!project) {

            return res.status(401).json({
                    success: false,
                    message: "Project not found" 
                });
        }

        const deletedProject = await removeProject(idNum);

        res.json({
            success: true,
            message: `Project successfully removed`,
            deletedProject 

        });

    }
     catch (err) {
        res.status(500).json({
             error: err.message 
        });
    }
});


router.post("/uploadFiles/:id", uploadFile.array("files", 10), async (req, res) => {
    try {
        const idNum = parseInt(req.params.id);
        const project = await getProjectById(idNum);

        if (!project) {
            return res.status(404).json({ success: false, message: "Project not found" });
        }

        console.log("Uploaded files:", req.files);

        const fileNames = req.files.map(f => f.filename);

        const updatedFiles = fileNames;


        const updated = await updateProject(idNum, { files: updatedFiles });

        res.json({
            success: true,
            message: "Files uploaded successfully",
            project: updated
        });
    } catch (err) {
        console.error("Upload error:", err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});



router.get("/downloadFile/:projectId/:filename", async (req, res) => {
    const { projectId, filename } = req.params;

    const filePath = path.join(__dirname, "..", "public", "assets", "files", filename);


    // console.log("filepathssss: ")
    // console.log(filePath);
    if (!fs.existsSync(filePath)) {
        console.log("nope")
        return res.status(404).json({ success: false, message: "File not found" });
    }

    // console.log("filepath: ")
    // console.log(filePath);
    res.download(filePath);
});




module.exports = router;
