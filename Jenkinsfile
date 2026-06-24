pipeline {
    agent any 
    environment {
        MY_AUTH_TOKEN = credentials('jenkins_123')
    }
    stages {
        stage('Checkout') { 
            steps {
                checkout scm 
            } 
        } 
    } 
}
