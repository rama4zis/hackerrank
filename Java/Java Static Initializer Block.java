import java.io.*;
import java.util.*;

public class Solution {

    static int B;
    static int H;
    static boolean flag;

    static {
        Scanner sc = new Scanner(System.in);
        B = sc.nextInt();
        H = sc.nextInt();

        try {
            if (B <= 0 || H <= 0) {
                throw new Exception("Breadth and height must be positive");
            } else {
                flag = true;
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public static void main(String[] args) {
        if (flag) {
            int area = B * H;
            System.out.println(area);
        }
    }
}
