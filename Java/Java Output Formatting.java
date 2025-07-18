import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        System.out.println("================================");
        for (int i = 0; i < 3; i++) {
            // String[] temp = new String[2];
            String data = scan.nextLine();
            String[] temp = data.trim().split(" ");
            System.out.print(temp[0]);
            for(int j = temp[0].length() ; j < 15; j++){
                System.out.print(" ");
            }
            for(int j = temp[1].length() ; j < 3; j++){
                System.out.print("0");
            }
            System.out.println(temp[1]);
        }
        System.out.println("================================");
        
        scan.close();
    }
}