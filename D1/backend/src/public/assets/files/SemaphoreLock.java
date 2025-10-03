
import java.util.LinkedList;
import java.util.Queue;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;

public class SemaphoreLock {
        private final ReentrantLock lock = new ReentrantLock();
        private final Condition con = lock.newCondition();
        private final int capacity;
        private int seats_taken = 0;
        private final Queue<Visitor> waitList = new LinkedList<>();

        public SemaphoreLock(int capacity) {
            //TODO: Complete function
            this.capacity = capacity;

        }
        
        public void lock(Visitor visitor) {
            //TODO: Complete function
            lock.lock();

            try{

                // add visitor to waitlist
                waitList.add(visitor);

                while(seats_taken == capacity || waitList.peek() != visitor){
                // System.out.println("Weeee");

                    try{
                        con.await();

                    } catch (InterruptedException e){
                        // Thread.currentThread().interrupt();
                        System.out.println(visitor.toString() + " was interrupted.");
                    }
                }


                if (waitList.peek() == visitor){

                    waitList.remove();
                
                    seats_taken++;
                    
                    // System.out.println("Weeee");

                    
                }
           
            } finally{
                lock.unlock();
            }
        }
        
        public void unlock(){
            //TODO: Complete function
            lock.lock();

            try{

                seats_taken--;

                // if (seats_taken == 0){
                    // for (int i = 0 ; i < capacity; i++){
                // waitList.remove();

                //     }
                // }
                con.signal();
           
            } finally{
                lock.unlock();
            }
        }
}
