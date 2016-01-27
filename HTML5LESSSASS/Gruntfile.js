/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function (grunt) {
    
    // Project configuration.
grunt.initConfig({
  'ftp_push': {
    deploy: {
      options: {
		authKey: "23.101.62.6",
    	host: "23.101.62.6",
    	dest: "/site/wwwroot",
    	port: 21
      },
      files: [
        {
          expand: true,
          cwd: './public_html',
          src: [
            "index.html"
          ]
        }
      ]
    }
  }
});
};
