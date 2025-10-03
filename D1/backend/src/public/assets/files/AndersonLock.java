import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicBoolean;

public class AndersonLock {
    private final AtomicBoolean[] slots;
    private final int size;
    private final AtomicInteger tail = new AtomicInteger(0);
    private final ThreadLocal<Integer> localSlot = ThreadLocal.withInitial(() -> 0);

    public AndersonLock(int capacity) {
        if (capacity <= 0) throw new IllegalArgumentException("capacity must be > 0");
        //TODO: Implement 
        size = capacity;
        slots = new AtomicBoolean[size];

        slots[0] = new AtomicBoolean(true);

        for (int i = 1; i < capacity; i++){
            slots[i] = new AtomicBoolean(false);
        }
    }

    public void lock() {
        //TODO: Implement 
        localSlot.set(tail.getAndIncrement()% size);

        while (slots[localSlot.get()].get() == false) {
            
        }

    }

    public void unlock() {
        //TODO: Implement 
        slots[localSlot.get()].set(false);
        slots[(localSlot.get() + 1) % size].set(true);
    }
}
