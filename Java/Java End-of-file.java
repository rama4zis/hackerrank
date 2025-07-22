import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Integer line = 0;
        while (scan.hasNext()) {
            String data = scan.nextLine();
            line++;
            System.out.println(line + " " + data);
        }
    }
}
