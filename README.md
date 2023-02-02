# etahn.ml

## How does this site run?
- This site runs off of a github repository I made, https://github.com/etahn-git/git-clone-and-execute
- Im using the docker container of that program. Which runs web server on port 3000
- Domain is free from freenom.com
- Name servers are cloudflare.
- On Cloudflare I have a [Cloudflare Zero Trust Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/ "Github Zero Trust Tunnel")
- That is pointing to a local linux machine on my network hosting 2 docker containers, one is the zero trust tunnel and one is the Docker Container of the program. They are isolated in there own docker network.
- etahn.ml points to the web server.

<br><br><br>
### Docker containers:
![Screenshot 2023-02-01 193909](https://user-images.githubusercontent.com/117325175/216217982-2ff74fc0-9a10-41ba-aed0-3ae90db949af.png)

### Cloudflare:
![image](https://user-images.githubusercontent.com/117325175/216218167-340a4b2a-ac6a-4b6d-88eb-e7dcceaee6ee.png)
