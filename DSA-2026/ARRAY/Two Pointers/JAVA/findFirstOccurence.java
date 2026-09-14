class  Solution {
    public int strStr(String hay,String needle){
         int j =0;
         for(int i=0;i<hay.length();i++){
             if(hay.charAt(i)==needle.charAt(j)){
             if(j==needle.length()-1){
                 return i-j;
             }
            }else{
                i=i-j;
                j=0;
            }
         }

        return -1;
    }
    
}