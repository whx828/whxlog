This lesson provides answers to some frequently asked questions based on domain name, DNS and web hosting.
本课提供了一些基于域名、DNS 和网络托管的常见问题的解答。

## Difference between a Domain Name and Web-Hosting [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/B8RB2ZW26mJ#Difference-between-a-Domain-Name-and-Web-Hosting)

People often confuse these two terminologies mainly because the service provided by both parties are usually similar. Domain names and web hosting are two different services. However, they work together to make websites possible.
人们经常混淆这两个术语，主要是因为双方所提供的服务通常是相似的。域名和虚拟主机是两种不同的服务。然而，它们一起工作，使网站成为可能。

Basically a domain name system is like a massive address book that is constantly updated. Behind each domain name, there is an address of the web hosting service storing the website's files. Without domain names, it will not be possible for people to find your website and without web hosting you cannot build a website.
基本上，域名系统就像一个不断更新的庞大地址簿。在每个域名背后，都有一个存储网站文件的网络托管服务的地址。没有域名，人们就不可能找到你的网站，没有虚拟主机，你就无法建立网站。

You can buy domain name and web hosting from two different companies. However, in that case you will have to point your domain name to your web hosting company by editing its DNS settings.
你可以从两个不同的公司购买域名和虚拟主机。然而，在这种情况下，你将不得不通过编辑 DNS 设置将域名指向你的虚拟主机公司。

On the other hand, if you purchase your domain name and web hosting from the same company, then you will not have to change domain name settings. It is also much easier to manage and renew both services under the same dashboard. If you'd rather purchase a domain name separately, below are some popular domain name registrars to consider:
另一方面，如果你从同一家公司购买你的域名和虚拟主机，那么你将不必改变域名设置。在同一个仪表板下管理和更新这两项服务也要容易得多。如果你愿意单独购买域名，下面是一些流行的域名注册商，可以考虑：

- GoDaddy
- NameCheap

## How to associate your domain name with your web hosting? [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/B8RB2ZW26mJ#How-to-associate-your-domain-name-with-your-web-hosting?)

If you've purchased a domain name at one company and decide to host it somewhere else, then you'll need to login to your domain registrar and modify the dns. This dns change just tells your domain registrar that the url you are using is now being hosted by someone else.
如果你在一家公司购买了一个域名，并决定将其托管在其他地方，那么你就需要登录到你的域名注册商，并修改 DNS。这个 DNS 修改只是告诉你的域名注册商，你正在使用的网址现在是由别人托管的。

Before modifying the dns, be mindful of your email addresses. If you've set up email addresses with your domain registrar, you will need to set these up again with your hosting provider. Before making any changes, it's best to contact your web developer or IT department and make sure that any changes won’t incur email loss.
在修改 DNS 之前，要注意你的电子邮件地址。如果你已经在你的域名注册商那里设置了电子邮件地址，你将需要在你的主机提供商那里重新设置这些地址。在进行任何修改之前，最好与你的网站开发人员或 IT 部门联系，并确保任何修改不会引起电子邮件丢失。

### Get Your Web Host's Name Servers [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/B8RB2ZW26mJ#Get-Your-Web-Host%E2%80%99s-Name-Servers)

The first thing you'll need to do is to find out the list of DNS or [name servers](https://www.google.com/search?q=name+servers&oq=name+servers&aqs=chrome..69i57j0l5.2152j0j7&sourceid=chrome&ie=UTF-8) used by your web host.
你需要做的第一件事是找出你的虚拟主机所使用的 DNS 或名称服务器的列表。

The easiest (though not necessarily fastest) way to find out the name servers used by your web host for your domain is to ask them. A faster way is to look for the information yourself in either the email sent to you by your host when you first signed up with them, or from the documentation on your web host's site. If you have no idea where to get the information, contact your web host and ask them for the “DNS servers” or “name servers” to use for your domain.
找到你的虚拟主机为你的域名使用的名称服务器的最简单（但不一定最快）的方法是询问他们。更快的方法是在你第一次注册时，从你的主机发给你的电子邮件中，或者从你的虚拟主机网站上的文档中，自己寻找信息。如果你不知道从哪里获得这些信息，可以联系你的虚拟主机，向他们询问你的域名所使用的 "DNS 服务器" 或 "名称服务器"。

The list of name servers will often look like `ns1.example.com`, `ns2.example.com`, and so on, where “ [example.com](http://example.com/) ” will probably be replaced by some other domain name used by your web host for their servers.
名称服务器的列表通常看起来像 `ns1.example.com、ns2.example.com`，等等，其中 "example.com" 可能会被你的虚拟主机用于其服务器的一些其他域名所取代。

Your web host may give you 2 or more name server addresses. Note down all these names. Better still, keep the email or web page containing these names open on your computer so that you can cut and paste them later. You'll need to enter these names, exactly as given, into your registrar's system.
你的虚拟主机可能给你 2 个或更多的名称服务器地址。记下所有这些名字。最好是把包含这些名字的电子邮件或网页在你的电脑上打开，以便你以后可以剪切和粘贴它们。你将需要把这些名字准确地输入到你的注册商系统中。

### Enter the Name Servers into Your Registrar's Settings for Your Domain [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/B8RB2ZW26mJ#Enter-the-Name-Servers-into-Your-Registrar%E2%80%99s-Settings-for-Your-Domain)

Once you have the list of name servers, go to your domain name registrar and log into their system. You will obviously need the login name and password that you created when you first registered your domain.
获得名称服务器列表后，请转到您的域名注册商并登录他们的系统。显然，您将需要首次注册域时创建的登录名和密码。

Once logged in, you will need to look for some option to either set your domain's name servers or change them. Every registrar has a different way of doing this, and there is no standard method, so it's not possible for me to give you a detailed blow-by-blow account of how to get to the appropriate screen. (Even if I did, my description will quickly become out-of-date since registrars, like all webmasters, change their site design every now and then.) What I'll do instead is give you some idea of what to look for.
登录后，您需要寻找一些选项来设置域的名称服务器或更改它们。每个注册商都有不同的方式来做到这一点，并且没有标准的方法，所以我不可能给你一个详细的一一说明如何进入适当的屏幕。 （即使我这样做了，我的描述也会很快过时，因为注册商，就像所有的网站管理员一样，时不时地改变他们的网站设计。）相反，我要做的是让你知道要寻找什么。

In general, try the following to get to the page on your registrar's site that lets you modify the name servers:
一般来说，尝试以下方法，以进入注册商网站上让你修改名称服务器的页面：

- Find a way to list all your domains in the registrar's site. Sometimes this can be found in a “My Domains” page, or a “Domain Manager” page, or something similarly named.
找到一种方法，在注册商的网站上列出你所有的域名。有时可以在 "我的域名" 页面，或 "域名管理器" 页面，或类似的名称中找到。

- Select the domains for which you want to set the name servers. Sometimes this involves checking a box beside your domain name in the list of names. Alternatively, if you only have one domain name, you may even be able to click the domain name to get to the settings screen.
选择你想设置名称服务器的域名。有时，这需要在名称列表中你的域名旁边勾选一个方框。另外，如果你只有一个域名，你甚至可以点击域名来进入设置界面。

- Some registrars have a “Manage DNS” menu link, or a “DNS” button, or a “Nameservers” button. If you see such a link or button, that’s probably the one that you will need to click. Basically look for things that say “DNS” or “Name Servers” or “Nameservers”, whether to “set” it, “change” it, “manage” it, “modify” it, “edit” it or some other thing to that effect.
一些注册商有一个 "管理 DNS" 菜单链接，或一个 "DNS" 按钮，或一个 "名称服务器" 按钮。如果你看到这样的链接或按钮，这可能就是你需要点击的那个。基本上寻找写有 "DNS" 或 "Name Servers" 或 "Nameservers" 的东西，无论是 "设置" 它、"改变" 它、"管理" 它、"修改" 它、"编辑" 它还是其他一些类似的东西。

Once you manage to find the correct page to change your name servers, you will probably see a form that lets you enter things like your “Primary Name Server”, “Secondary Name Server”, “Tertiary Name Server” and maybe even more (like a fourth, fifth and sixth name server as well). The exact words used may not be the same, but it should mean basically your first name server, second name server, and so on.
一旦你设法找到正确的页面来改变你的名称服务器，你可能会看到一个表格，让你输入诸如 "主要名称服务器"、"第二名称服务器"、"第三名称服务器"，甚至可能更多（如第四、第五和第六名称服务器）。所用的确切词语可能不一样，但基本上应该是指你的第一名称服务器、第二名称服务器，以此类推。

## Is it possible to transfer from one Domain Registrar to another? [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/B8RB2ZW26mJ#Is-it-possible-to-transfer-from-one-Domain-Registrar-to-another?)

No matter where you registered a domain name from, you're free to transfer it to another registrar whenever you want. Users usually transfer their domain name if they're not satisfied with the service offered by their current domain name registrar.
无论你从哪里注册的域名，你都可以随时将其转移到另一个注册商处。如果用户对目前的域名注册商提供的服务不满意，他们通常会转移域名。

Whatever your reason for transferring is, to initiate the transfer, we always recommend you to wait at least 45 days after the registration or renewal. ICANN, the international organization that oversees domain names, requires one year renewal whenever a transfer is initiated. By transferring your domain name before that period you could lose that year's renewal fee.
无论你转移的原因是什么，要启动转移，我们总是建议你在注册或续期后至少等待 45 天。ICANN 是监督域名的国际组织，每当启动转移时，都需要一年的续期。如果在这段时间之前转让域名，你可能会失去那一年的续费。

## How to Switch your Web Hosting [#](https://www.educative.io/courses/a-complete-guide-to-launching-your-website-from-local-to-live/B8RB2ZW26mJ#How-to-Switch-your-Web-Hosting)

In some cases, switching your web hosting is easier than transferring your domain name to another registrar. It's because most hosting providers offer free website transfer. If you're planning to transfer a website to another web hosting provider, the first thing you should do is ask your new hosting provider whether they offer a free website transfer.
在某些情况下，转换你的虚拟主机比将你的域名转移到另一个注册商更容易。这是因为大多数主机供应商提供免费的网站转移。如果你打算将网站转移到另一个虚拟主机供应商，你应该做的第一件事是询问你的新主机供应商是否提供免费的网站转移。

If yes, you can hand over the required login credentials to the customer service for the free website transfer. Usually, web hosting providers only offer free cPanel to cPanel transfers. If your existing web host doesn't use a cPanel, then you might want to transfer it on your own.
如果是，你可以把所需的登录凭证交给客服，以便进行免费网站转移。通常情况下，虚拟主机供应商只提供免费的 cPanel 到 cPanel 转移。如果你现有的虚拟主机不使用 cPanel，那么你可能想自己转移。
