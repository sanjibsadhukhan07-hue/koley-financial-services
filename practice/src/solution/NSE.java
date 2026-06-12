package solution;

import java.util.Arrays;
import java.util.Stack;

public class NSE {
    public static void main(String[] args) {
        int arr[] = {4,5,2,10,8,3,7};
        Stack<Integer> st = new Stack<>();
        int result[] = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
                while(!st.empty() && st.peek()>arr[i]){
                    st.pop();
                    result[i]=-1;
                }
                if(st.empty()){
                    result[i]=-1;

                } else {
                    result[i]=st.peek();
                }

                st.push(arr[i]);
        }
        System.out.print(Arrays.toString(result));
    }
}
