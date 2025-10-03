const { runFindQuery, runInsertQuery, runUpdateQuery, runDeleteQuery } = require("../database");

//  Read
// get all projects

async function getProjects() {
  const users = await runFindQuery("projects");
  return users || null;
}

// get project by id
async function getProjectById(id) {
  const users = await runFindQuery("projects", { id });
  return users[0] || null;
}

async function getUserProjects(id) {
  return await runFindQuery("projects", { members: id });
}

// Create
// Add a project
async function addProject(newProjects) {
  return await runInsertQuery("projects", newProjects);
}

// Update 
// Edit a project 
async function updateProject(id, updates) {
  return await runUpdateQuery("projects", { id }, { $set: updates });
}

// leave a project
async function leaveProject(userId, projectId) {

    await runUpdateQuery(
        "users",
        { id: userId },
        { $pull: { projects: projectId } }
    );


    return await runUpdateQuery(
        "projects",
        { id: projectId },
        { $pull: { members: userId } }
    );
}



// check in
async function checkInProject(projectId, userId, message) {
    const user = await runFindQuery("users", { id: userId });

    // make feed
    const activity = {
        type: "Checked in",
        modifiedBy: user.username,
        comment: message
    };

    // make check in 
    return await runUpdateQuery(
        "projects",
        { id: projectId },
        {
            $set: { status: "Checked In", checkedOutBy: null },

            $push: { activities: activity }
        }
    );
}


// // add activity
// async function addProjectActivity(id, updates) {
// //   return await runUpdateQuery("users", { id }, { $set: updates });
// }


// check out
async function checkOutProject(projectId, userId, message) {
    const user = await runFindQuery("users", { id: userId });

    // make feed
    const activity = {
      type: "Checked out",
      modifiedBy: user.username,
      comment: message
    };

    // make check out 
    return await runUpdateQuery(
        "projects",
        { id: projectId },

        {
            $set: { status: "Checked Out", checkedOutBy: userId },

            $push: { activities: activity }
        }
    );


}


// add member
async function addProjectMember(projectId, AddedMemberId) {
    
    await runUpdateQuery(
    "projects",
    { id: projectId }, // receiver
 
    {
        $addToSet: {
             members: AddedMemberId 
            }
      }
    );
}


// remove member
async function removeProjectMember(projectId, memberId) {
    await runUpdateQuery(
    "projects",
    { id: projectId }, // receiver

    // remove from request and add to friends
    {
       $pull: {
         members: memberId 
        },

      }
    );
}


// update project image
// Edit a project 
async function updateProject(id, updates) {
  return await runUpdateQuery("projects", { id }, { $set: updates });
}


// Delete
// remove a project ? admin?
async function removeProject(id) {
    return await runDeleteQuery("projects", { id });
}



async function getNextProjectId() {
    const lastProject = await runFindQuery("projects", {}, { sort: { id: -1 }, limit: 1 });
    
    if (!lastProject.length) {
        return 1
    };

    return lastProject[0].id + 1;
}


// update project image
async function updateProjectImage(idNum, imagePath) {
    console.log("backend: "+ imagePath);
    
    await runUpdateQuery(
    "projects",

    // change path of image
    { id: parseInt(idNum) },
    
    { $set: { projectImage: imagePath } }
    );

    
    return await getProjectById(idNum);
}


module.exports = {
    getProjects,
    getProjectById,
    addProject,
    updateProject,
    checkInProject,
    checkOutProject,
    addProjectMember,
    removeProjectMember, 
    getUserProjects,
    getNextProjectId,
    removeProject, 
    updateProjectImage,
    leaveProject
};