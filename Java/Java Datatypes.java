import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Integer q = scan.nextInt();
        scan.nextLine(); // Consume the newline after nextInt()

        for (int i = 0; i < q; i++) {
            String dataStr = scan.nextLine();
            try {
                long data = Long.parseLong(dataStr);
                System.out.println(data + " can be fitted in:");

                // Check for byte
                if (data >= Byte.MIN_VALUE && data <= Byte.MAX_VALUE) {
                    System.out.println("* byte");
                }
                // Check for short
                if (data >= Short.MIN_VALUE && data <= Short.MAX_VALUE) {
                    System.out.println("* short");
                }
                // Check for int
                if (data >= Integer.MIN_VALUE && data <= Integer.MAX_VALUE) {
                    System.out.println("* int");
                }
                // Check for long (this will always be true if Long.parseLong succeeded)
                if (data >= Long.MIN_VALUE && data <= Long.MAX_VALUE) {
                    System.out.println("* long");
                }

            } catch (NumberFormatException e) {
                // This correctly handles numbers too large/small for a long
                System.out.println(dataStr + " can't be fitted anywhere.");
            }
        }
        scan.close(); // Close the scanner
    }
}