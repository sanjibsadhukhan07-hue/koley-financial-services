package solution;

import java.util.*;

class Activity{
    String name;
    int start;
    int end;
    Activity(String name, int start, int end){
        this.name = name;
        this.start = start;
        this.end = end;
    }

    @Override
    public String toString() {
        return  "Activity{" + "name=" + name + ", start=" + start + ", end=" + end + '}';
    }
}
public class Main {
    public static void main(String[] args) {
        List<Activity> activities = new ArrayList<>();
        activities.add(new Activity("A1", 1, 4));
        activities.add(new Activity("A2", 3, 5));
        activities.add(new Activity("A3", 0, 6));
        activities.add(new Activity("A4", 5, 7));
        activities.add(new Activity("A5", 3, 9));
        activities.add(new Activity("A6", 5, 9));
        activities.add(new Activity("A7", 6, 10));
        activities.add(new Activity("A8", 8, 11));
        List<Activity> result = getActivities(activities);
        System.out.print(result);

    }
    static List<Activity> getActivities(List<Activity> activities){
        List<Activity> result= new ArrayList<>();
        activities.sort(Comparator.comparingInt(a->a.end));
        Activity startAct=activities.get(0);
        result.add(startAct);
        for(int i=1;i<activities.size();i++){
            if(startAct.end<activities.get(i).start){
                result.add(activities.get(i));
                startAct=activities.get(i);
            }
        }
        return result;
    }
}
