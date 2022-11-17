pipeline
{
  agent any
  stages {
    stage('Build')
    {
      steps {
        sh" npm install"
        sh" npm run build"
      }
    }
      stage('Deploy')
    {
      steps {
         sh" kill -9 \$(lsof -i:3000) "
         sh" JENKINS_NODE_COOKIE=dontKillMe nohup serve -s -l 3000 & "
      }
    }
  }
}
