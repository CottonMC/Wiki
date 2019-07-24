The oofficial wiki for the Cotton Project, created by Ansraer

[See it in action here!](https://cottonmc.github.io/Wiki/)

## Building the site on your PC
The github pages site is automatically updated after each commit. However, if you want to test changes locally you will need to install jekyll on your PC.

1.  Start by openiong bash and making sure that you have ruby installed:
    ```bash
    $ ruby --version
    > ruby 2.X.X
    ```
    If you don't have ruby installed, install [Ruby 2.1.0 or higher](https://www.ruby-lang.org/en/downloads/).

2.  Install bundler:
    ```bash
    $ gem install bundler
    ```

3.  Navigate to the project directory and install all the necessary dependencies:
    ```bash
    $ bundle install
    > Fetching gem metadata from https://rubygems.org/............
    > Fetching version metadata from https://rubygems.org/...
    > Fetching dependency metadata from https://rubygems.org/..
    > Resolving dependencies...
    ```

4.  Run the wiki site locally:
    ```bash
    $ bundle exec jekyll serve
    ```

5. Open the site in your browser: [http://localhost:4000/Wiki/](http://localhost:4000/Wiki/)