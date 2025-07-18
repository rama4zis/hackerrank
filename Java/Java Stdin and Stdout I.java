import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scan = new Scanner(System.in);
        Integer[] data = new Integer[3];
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 3; j++) {
                if(i == 0){
                    data[j] = scan.nextInt();
                } else {
                    System.out.println(data[j]);
                }
                
            }
        }
    }
}