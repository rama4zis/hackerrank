import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        
        Integer q = scan.nextInt();
        scan.nextLine();
        
        String[] data = new String[q];
        
        for (int i = 0; i < data.length; i++) {
            data[i] = scan.nextLine();
            String[] dataTemp = data[i].trim().split(" ");
            Integer[] dataInt = new Integer[dataTemp.length];
            for (int j = 0; j < dataTemp.length; j++) {
                dataInt[j] = Integer.parseInt(dataTemp[j]);
            }
            // third input
            Integer tempValue = dataInt[0] + (1 * dataInt[1]);
            System.out.print(tempValue + " ");
            Integer tempTimes = 2;
            for (int j = 1; j < dataInt[2]; j++) {
                Integer newValue = tempValue + (tempTimes * dataInt[1]);
                System.out.print(newValue);
                tempValue = newValue;
                tempTimes = tempTimes * 2;
                System.out.print(" ");
            }
            System.out.println();
        }
    }
}