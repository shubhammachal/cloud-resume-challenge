.PHONY: build

build:
	sam build

deploy-infra:
	sam build && aws-vault exec shubham --no-session -- sam deploy

deploy-site:
	aws-vault exec shubham --no-session -- aws s3 sync ./resume-site s3://machal-resume-website

invoke-put:
	sam build && sam local invoke PutFunction

invoke-get:
	sam build && sam local invoke PutFunction
