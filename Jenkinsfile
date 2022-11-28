pipeline
{
  agent any
  stages {
      stage('Deploy')
    {
      steps {
         sh" docker-compose stop "
         sh" docker image rm hok-front "
         sh" docker-compose up --build -d "
      }
    }
  }
}
