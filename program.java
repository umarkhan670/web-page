import java.sql.*;
import java.lang.String;
class FatchData{

  public static void main(String args[])
{
   try{
  Class.forName("oracle.jdbc.driver.OracleDriver");
Connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","admin");
System.out.println("Done");
Statement st=con.createStatement();
String str="select * from TY";
ResultSet rs=st.executeQuery(str);
while(rs.next())
{
    System.out.println(rs.getInt(1));

System.out.println("Done");
}

 
}
catch(Exception e){}

}
}       
