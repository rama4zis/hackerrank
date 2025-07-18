import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        Integer data1 = scan.nextInt();
        scan.nextLine();
        Double data2 = scan.nextDouble();
        scan.nextLine();
        String data3 = scan.nextLine();
        
        System.out.println("String: " + data3);
        System.out.println("Double: " + data2);
        System.out.println("Int: " + data1);

        scan.close();
    }
}