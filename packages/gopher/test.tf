variable "instance_type" {
  default     = "t2.micro"
  description = "Type of instance"
}


resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = var.instance_type

  tags = {
    Name = "ExampleInstance"
  }
}


provider "aws" {
  region = "us-east-1"
}
