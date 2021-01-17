pipeline {
    agent any 
    stages {
        stage('build') { 
            steps {
                echo 'Node Modules Installation...'
                bat 'npm install'
            }
        }
        stage('test') { 
            steps {
                echo 'Building App..'
                bat '($env:REACT_APP_TESTVAR = "abcdef") -and (npm run build)'
            }
        }
        stage('deploy') { 
            steps {
                echo 'Docker Config'
                bat "docker pull httpd"
                bat "docker build -t reactapp"
                bat "docker run --name dockerreact -p 5000:80 reactapp"
            }
        }
    }
}
