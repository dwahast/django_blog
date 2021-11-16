# django_blog with react

python manage.py runserver

npm run dev

npm run build

```
douglas@pop-os:~/Documents/django_blog$ heroku create
Creating app... done, ⬢ intense-everglades-64647
https://intense-everglades-64647.herokuapp.com/ | https://git.heroku.com/intense-everglades-64647.git
```

```
heroku config:set SECRET_KEY=123adminherokuapp --app=intense-everglades-64647
```

```
douglas@pop-os:~/Documents/django_blog$ heroku config:set DEBUG=False --app=intense-everglades-64647
Setting DEBUG and restarting ⬢ intense-everglades-64647... done, v6
DEBUG: False
douglas@pop-os:~/Documents/django_blog$ heroku addons
 ▸    Couldn't find that app.
douglas@pop-os:~/Documents/django_blog$ heroku addons --app=intense-everglades-64647No add-ons for app intense-everglades-64647.
```
```
No add-ons for app intense-everglades-64647.
douglas@pop-os:~/Documents/django_blog$ heroku addons:create heroku-postgresql:hobby-dev --app=intense-everglades-64647
Creating heroku-postgresql:hobby-dev on ⬢ intense-everglades-64647... free
Database has been created and is available
 ! This database is empty. If upgrading, you can transfer
 ! data from another database with pg:copy
Created postgresql-opaque-58679 as DATABASE_URL
Use heroku addons:docs heroku-postgresql to view documentation
```