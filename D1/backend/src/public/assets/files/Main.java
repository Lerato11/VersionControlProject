

public class Main{
    public static void main(String[] args) throws InterruptedException{
        //TODO: Test Your Code

        System.out.println(" -------- TEST 1 -------- ");

        AndersonLock Alock1 = new AndersonLock(4);

        SpaceShip spaceShip0T1 = new SpaceShip(0, Alock1, 1);
        SpaceShip spaceShip1T1 = new SpaceShip(1, Alock1, 3);
        SpaceShip spaceShip2T1 = new SpaceShip(2, Alock1, 4);
        SpaceShip spaceShip3T1 = new SpaceShip(3, Alock1, 2);

        spaceShip0T1.start();
        spaceShip1T1.start();
        spaceShip2T1.start();
        spaceShip3T1.start();

        spaceShip0T1.join();
        spaceShip1T1.join();
        spaceShip2T1.join();
        spaceShip3T1.join();



        System.out.println("");
        
        System.out.println(" -------- TEST 2 -------- ");

        AndersonLock Alock2 = new AndersonLock(5);

        SpaceShip spaceShip0T2 = new SpaceShip(0, Alock2, 5);
        SpaceShip spaceShip1T2 = new SpaceShip(1, Alock2, 3);
        SpaceShip spaceShip2T2 = new SpaceShip(2, Alock2, 4);
        SpaceShip spaceShip3T2 = new SpaceShip(3, Alock2, 1);
        SpaceShip spaceShip4T2 = new SpaceShip(3, Alock2, 3);

        spaceShip0T2.start();
        spaceShip1T2.start();
        spaceShip2T2.start();
        spaceShip3T2.start();
        spaceShip4T2.start();

        spaceShip0T2.join();
        spaceShip1T2.join();
        spaceShip2T2.join();
        spaceShip3T2.join();
        spaceShip4T2.join();
    }
}
