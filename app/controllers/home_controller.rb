class HomeController < ApplicationController
  def index
    render component: 'MainContainer',
           props: { title: 'Hello World' },
           tag: 'div', class: 'main-container',
           data: { remote: true },
           prerender: true
  end
end
