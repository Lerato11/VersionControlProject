import java.io.*;
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

public class Main {

    public static void main(String[] args) throws InterruptedException{
        //TODO: Test your code

        System.out.println(" -------- TEST 1 -------- ");

        SemaphoreLock SemaphoreLock1 = new SemaphoreLock(4);
        List<Integer> boardingLog1 = new LinkedList<>();

        Visitor visitor0T1 = new Visitor(0, SemaphoreLock1, boardingLog1);
        Visitor visitor1T1 = new Visitor(1, SemaphoreLock1, boardingLog1);
        Visitor visitor2T1 = new Visitor(2, SemaphoreLock1, boardingLog1);
        Visitor visitor3T1 = new Visitor(3, SemaphoreLock1, boardingLog1);
        Visitor visitor4T1 = new Visitor(4, SemaphoreLock1, boardingLog1);
        Visitor visitor5T1 = new Visitor(5, SemaphoreLock1, boardingLog1);
        Visitor visitor6T1 = new Visitor(6, SemaphoreLock1, boardingLog1);
        Visitor visitor7T1 = new Visitor(7, SemaphoreLock1, boardingLog1);
        Visitor visitor8T1 = new Visitor(8, SemaphoreLock1, boardingLog1);

        Thread t01 = new Thread(visitor0T1);
        Thread t11 = new Thread(visitor1T1);
        Thread t21 = new Thread(visitor2T1);
        Thread t31 = new Thread(visitor3T1);
        Thread t41 = new Thread(visitor4T1);
        Thread t51 = new Thread(visitor5T1);
        Thread t61 = new Thread(visitor6T1);
        Thread t71 = new Thread(visitor7T1);
        Thread t81 = new Thread(visitor8T1);

        t01.start();
        t11.start();
        t21.start();
        t31.start();
        t41.start();
        t51.start();
        t61.start();
        t71.start();
        t81.start();

        t01.join();
        t11.join();
        t21.join();
        t31.join();
        t41.join();
        t51.join();
        t61.join();
        t71.join();
        t81.join();


        System.out.println("");
        
        System.out.println(" -------- TEST 2 -------- ");

        SemaphoreLock SemaphoreLock2 = new SemaphoreLock(5);
        List<Integer> boardingLog2 = new LinkedList<>();


        Visitor visitor0T2 = new Visitor(0, SemaphoreLock2, boardingLog2);
        Visitor visitor1T2 = new Visitor(1, SemaphoreLock2, boardingLog2);
        Visitor visitor2T2 = new Visitor(2, SemaphoreLock2, boardingLog2);
        Visitor visitor3T2 = new Visitor(3, SemaphoreLock2, boardingLog2);
        Visitor visitor4T2 = new Visitor(4, SemaphoreLock1, boardingLog1);
        Visitor visitor5T2 = new Visitor(5, SemaphoreLock1, boardingLog1);
        Visitor visitor6T2 = new Visitor(6, SemaphoreLock1, boardingLog1);
        Visitor visitor7T2 = new Visitor(7, SemaphoreLock1, boardingLog1);
        Visitor visitor8T2 = new Visitor(8, SemaphoreLock1, boardingLog1);

        Thread t02 = new Thread(visitor0T2);
        Thread t12 = new Thread(visitor1T2);
        Thread t22 = new Thread(visitor2T2);
        Thread t32 = new Thread(visitor3T2);
        Thread t42 = new Thread(visitor4T2);
        Thread t52 = new Thread(visitor5T2);
        Thread t62 = new Thread(visitor6T2);
        Thread t72 = new Thread(visitor7T2);
        Thread t82 = new Thread(visitor8T2);

        t02.start();
        t12.start();
        t22.start();
        t32.start();
        t42.start();
        t52.start();
        t62.start();
        t72.start();
        t82.start();

        t02.join();
        t12.join();
        t22.join();
        t32.join();
        t42.join();
        t52.join();
        t62.join();
        t72.join();
        t82.join();
    }
}
