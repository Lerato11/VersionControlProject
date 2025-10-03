import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

class Visitor implements Runnable {
    private final int id;
    private final SemaphoreLock seats;
    private final List<Integer> boardingLog;

    public Visitor(int id, SemaphoreLock seats, List<Integer> boardingLog) {
        this.id = id;
        this.seats = seats;
        this.boardingLog = boardingLog;
    }

    @Override
    public void run() {
        //TODO: Complete function

        int sleepTime = ThreadLocalRandom.current().nextInt(100, 300 + 1);

        System.out.println("Visitor " + id + " arrives at the ride.");

        seats.lock(this);

        try{
            System.out.println("Visitor " + id + " boards the ride!");
            
            try{
                boardingLog.add(id);

                Thread.sleep(sleepTime);

            } catch (InterruptedException e){
                System.out.println("Visitor " + id + " was interrupted.");
            }

            System.out.println("Visitor " + id + " leaves the ride.");
            boardingLog.remove(Integer.valueOf(id));

        }finally{
            seats.unlock();
        }
    }
    public String toString() {
        return "Visitor " + id;
    }
}
