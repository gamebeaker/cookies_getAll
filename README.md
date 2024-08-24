# The problem:

Since chromium version 138.0.6613.0 there is a problem with chrome.cookies.get() and chrome.cookies.getAll()

If cloudflare sets the cookie name: cf_clearance with a Partition Key Site an addon is unable to access this cookie.

# To reproduce the error:
Download these two Chrome test versions to Compare 128.0.6612.0 and 128.06.6613.0 with:

npx @puppeteer/browsers install chrome@128.0.6612.0

npx @puppeteer/browsers install chrome@128.0.6613.0

Clone this repo

Install this addon in Chrome 128.0.6612.0

Click the Addon icon

The open Tab should look like this:

![image](https://github.com/user-attachments/assets/6445b284-9eef-4a96-83eb-dd38408379b7)

Open the "Website with cloudflare" protection link and solve the cloudflare challenge

Click the Addon icon

Click "Search with getAll() Cookies" button

![image](https://github.com/user-attachments/assets/8e115aef-72f7-4b3f-b887-bfaae2425ae1)

Now you can see the Cookie with the name cf_clearance

![image](https://github.com/user-attachments/assets/778c9430-cfbc-4bb6-b94b-a28f22680c29)

Close Chromium 128.0.6612.0 open 128.0.6613.0

Click the Addon icon

The open Tab should look like this:

![image](https://github.com/user-attachments/assets/6445b284-9eef-4a96-83eb-dd38408379b7)

Open the "Website with cloudflare" protection link and solve the cloudflare challenge

Click the Addon icon

Click "Search with getAll() Cookies" button

![image](https://github.com/user-attachments/assets/8e115aef-72f7-4b3f-b887-bfaae2425ae1)

Now you can't see the Cookie with the name cf_clearance

![image](https://github.com/user-attachments/assets/11588663-a60e-495d-b383-8e71a0340327)

Open the "Website with cloudflare" protection link and solve the cloudflare challenge

Open dev tools -> Application -> Storage -> Cookies -> https://mtlarchive.com

![image](https://github.com/user-attachments/assets/d89268db-cfbc-4153-b8f2-92c21261b04f)

here you can still see the cookie only the addon is unable to get it.
