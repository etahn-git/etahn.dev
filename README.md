# etahn.dev

## How does this site run?
- The site is running under a static site for free with render.com
- I am using a paid domanin from domains.google.com
- Connected to cloudflare's name servers and DNS pointed to renders server, I use cloudflare because of many of the free services and the DNS page they have is easy to manage.
- etahn.dev


<hr>
<br><br><br><br><br><br>

## How does this site run? - OLD
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
