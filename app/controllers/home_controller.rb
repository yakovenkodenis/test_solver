class HomeController < ApplicationController
  def index
    render component: 'MainContainer',
           props: { title: 'Hello World' },
           tag: 'span', class: 'main-container',
           data: { remote: true }
  end
end
