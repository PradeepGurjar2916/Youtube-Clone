export const API_KEY = 'AIzaSyCMlm7IpQSEkzrDNjaQNZmSAfy5bZj67vU';
export const API_KEY1 = 'AIzaSyA3XE5bmXAFDHmUKuW70wHG2tSppjQJoLo';
export const API_KEY2 = 'AIzaSyBF9Tk6tE7MWIHJRucwIGNppFZ1y-8zdkw';
export const API_KEY3 = 'AIzaSyBMXuuS9XfwlYllhKmwwfTktjkZPXh6eJY';
export const API_KEY4 = 'AIzaSyC1FHD1mRvPCytuIv6Umuur5aKZce35QiY';

export const value_converter = (value) =>{
      if(value>=1000000){
            return Math.floor(value/1000000)+"M";
      }
      else if(value>=1000){
            return Math.floor(value/1000)+"K";
      }
      else{
            return value;
      }
}
