package interview;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

public class Java8 {
    public static void main(String[] args) {
        MyFunctionalInterface c = (a, b) ->  a + b;
        c.sum(10, 20);
        MyPredicate p = (a, b) -> (a + b) >= 10;
        Map<String, Integer> map =new HashMap<>();
        for(Map.Entry<String,Integer> entry :map.entrySet()){
            map.put(entry.getKey(), entry.getValue());
        }

    }
}
