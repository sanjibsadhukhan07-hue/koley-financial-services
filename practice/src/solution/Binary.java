package solution;

import java.util.Arrays;

public class Binary {

    public static void main(String[] args) {
        int arr[] = {12, 14, 16, 10, 11, 13};
        Arrays.sort(arr);
        System.out.print(binarySearch(arr, 13));
    }

    private static boolean binarySearch(int arr[], int element){
        int low = 0;
        int high = arr.length-1;
        while(low<=high){
            int mid = (low+high)/2;
            if(element>arr[mid]){
                low = mid+1;
            }
            else if(element<arr[mid]){
                high = mid-1;
            }
            else{
                return true;
            }
        }
        return false;
    }
}
