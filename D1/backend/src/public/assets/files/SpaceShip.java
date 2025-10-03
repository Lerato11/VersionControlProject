
public class SpaceShip extends Thread {
    private final int threadId;
    private final AndersonLock lock;
    private final int dockings;

    public SpaceShip(int id, AndersonLock lock, int dockings) {
        //TODO: Implement
        this.threadId = id;
        this.lock = lock;
        this.dockings = dockings;
    }

    private void dock() throws InterruptedException{
        //TODO: Implement
        lock.lock();

        try{
            System.out.println("Ship " + getID() + " is DOCKING");
            Thread.sleep(200);
            System.out.println("Ship " + getID() + " has LEFT the docking port");
        } finally {
            lock.unlock();
        }

    }

    @Override
    public void run() {
        //TODO: Implement
        try {
            for (int i = 0; i < this.dockings; i++){
                dock();
                Thread.sleep((int) (Math.random() * 300));
            }
        } catch (InterruptedException e) {
            System.out.println("Ship " + getID() + " was interrupted.");
        }
    }

    public int getID(){
        return threadId;
    }
}