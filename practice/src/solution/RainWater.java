package solution;

public class RainWater {
    public static void main(String[] args) {
        int arr[] = {5, 5, 1, 7, 1, 1, 5};
        int left= 0;
        int right = arr.length-1;
        int leftMax=0;
        int rightMax=0;
        int result=0;
        while(left<right){
            leftMax = Integer.max(leftMax, arr[left]);
            rightMax = Integer.max(rightMax, arr[right]);
            if(leftMax<rightMax){
                result+=leftMax-arr[left];
                left++;
            } else {
                result+=rightMax-arr[right];
                right--;
            }
        }
        System.out.print(result);
    }
}
