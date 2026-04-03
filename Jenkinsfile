pipeline {
    agent any
    environment {
        AWS_ACCOUNT_ID = "235494812877"
        AWS_REGION = "ap-south-1"
        ECR_REPO = "food-to-go"
        IMAGE_TAG = "latest"
        ECR_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com/${ECR_REPO}"
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                credentialsId: 'github-credentials',
                url: 'https://github.com/Kavinbali/Food-to-go-.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${ECR_REPO}:${IMAGE_TAG} ."
            }
        }
        stage('Push to ECR') {
            steps {
                sh """
                    aws ecr get-login-password --region ${AWS_REGION} | \
                    docker login --username AWS --password-stdin ${ECR_URI}
                    docker tag ${ECR_REPO}:${IMAGE_TAG} ${ECR_URI}:${IMAGE_TAG}
                    docker push ${ECR_URI}:${IMAGE_TAG}
                """
            }
        }
        stage('Deploy to EKS') {
            steps {
                sh """
                    kubectl apply -f Kubernetes/deployment.yaml
                    kubectl apply -f Kubernetes/service.yaml
                """
            }
        }
    }
    post {
        success {
            echo 'Food to go deployed successfully!'
        }
        failure {
            echo 'Pipeline failed! Check logs.'
        }
    }
}
