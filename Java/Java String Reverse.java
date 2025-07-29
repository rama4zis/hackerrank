import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        
        Scanner sc = new Scanner(System.in);
        
        String data = sc.nextLine();
        Integer counter = 0;
        for (int i = data.length() - 1; i >= 0; i--) {
            // System.out.println(data.charAt(i));
            if (data.charAt(i) != data.charAt(counter)) {
                System.out.println("No");
                break;
            } else {
                counter++;
                continue;
            }
        }
        
        if (counter == data.length()) {
            System.out.println("Yes");
        }
        
    }
}