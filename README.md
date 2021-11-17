# Django Blog with React (Heroku Cloud)
    Para adicionar novo post é necessário fazer o login na página [URL]/admin (antes é necessário configurar um usário)

    Após o login é necessário acessar a aba "Posts" e clicar em "Add Post"
    Após isso preencher os dados conforme requisitado para criação do post.

## Configurações de imaplantação
### Para iniciar o servidor Django
    python manage.py runserver

### Para buildar o front
    npm run dev

### Instanciação no Heroku (Parametrizar de acordo com o retorno do Heroku Create)
    heroku login
    
    heroku create
        Creating app... done, ⬢ intense-everglades-64647
        https://intense-everglades-64647.herokuapp.com/ | https://git.heroku.com/intense-everglades-64647.git

    heroku config:set SECRET_KEY=123adminherokuapp --app=intense-everglades-64647
    heroku config:set DEBUG=False --app=intense-everglades-64647
    heroku config:set ALLOWED_HOSTS=intense-everglades-64647.herokuapp.com --app=intense-everglades-64647
    heroku config:set DJANGO_SETTINGS_MODULE=django_project.settings.heroku --app=intense-everglades-64647

    heroku config:set AWS_ACCESS_KEY_ID=? --app=intense-everglades-64647
    heroku config:set AWS_SECRET_ACCESS_KEY=? --app=intense-everglades-64647
    heroku config:set AWS_STORE_BUCKET_NAME="django-blog-with-react-images" --app=intense-everglades-64647
    heroku config:set AWS_S3_FILE_OVERWRITE=False --app=intense-everglades-64647

    heroku addons:create heroku-postgresql:hobby-dev --app=intense-everglades-64647

    heroku git:remote -a staging-app
    git push heroku main

    heroku run bash
    python3 manage.py createsuperuser


