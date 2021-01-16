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
                bat 'npm run build'
            }
        }
        stage('deploy') { 
            steps {
                echo 'Deploy on Apache'
                bat "xcopy /s build C:\\Apache24\\htdocs"
            }
        }
    }
}
