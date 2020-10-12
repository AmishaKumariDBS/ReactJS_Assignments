package com.springexample.demo;

public class Organization{
    private String orgName;
    private String location;
    private int num;
    public Organization()
    {
        System.out.println("default constr org is called");
    }
    public Organization(String orgName, String location, int num)
    {
        super();

        System.out.println("default constr Org is called");
        this.orgName = orgName;
        this.location = location;
        this.num = num;
    }

    public String getOrg()
    {
        return orgName;
    }
    public String getLoc()
    {
        return location;
    }
    public int getNo()
    {
        return num;
    }

    public void setOrg(String orgName) {
        this.orgName = orgName;
    }
    public void setLoc(String location) {
        this.location = location;
    }
    public void setNo(int num) {
        this.num = num;
    }
    public String toString() {
        return "Orgnization [ name" + orgName + "location is" + location + "no of employees " + num+ "]";
    }


}
