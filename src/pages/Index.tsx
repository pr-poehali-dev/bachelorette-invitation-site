import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Блестящие частицы */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-3 h-3 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-yellow-500 to-pink-600 bg-clip-text text-transparent mb-4 font-serif">
            Девичник ✨
          </h1>
          <p className="text-xl text-gray-700 font-light">
            Приглашение на незабываемый вечер красоты и веселья
          </p>
        </div>

        {/* Главное изображение */}
        <div className="flex justify-center mb-16 animate-scale-in">
          <div className="relative">
            <img 
              src="/img/81796fd1-a0f9-4cf2-9ccb-7ce9fe64fc9a.jpg" 
              alt="Glamorous spa party" 
              className="rounded-3xl shadow-2xl max-w-md w-full hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-yellow-200/20 rounded-3xl"></div>
          </div>
        </div>

        {/* Основные секции */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Приглашение */}
          <Card className="bg-gradient-to-br from-pink-100 to-pink-200 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-pink-800 mb-3">Приглашение</h3>
              <p className="text-pink-700 text-sm leading-relaxed">
                Дорогие подруги! Приглашаю вас на волшебный девичник, где нас ждут SPA-процедуры, фотосессия и незабываемая вечеринка!
              </p>
              <div className="mt-4 text-pink-600 font-semibold">
                <Icon name="Calendar" size={16} className="inline mr-1" />
                25 июля, 18:00
              </div>
            </CardContent>
          </Card>

          {/* Место */}
          <Card className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Место</h3>
              <p className="text-yellow-700 text-sm leading-relaxed">
                SPA-отель "Золотая Роза"
                <br />
                ул. Красивая, 15
                <br />
                Москва
              </p>
              <Button 
                className="mt-4 bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 text-white border-none"
                size="sm"
              >
                <Icon name="MapPin" size={16} className="mr-1" />
                Карта
              </Button>
            </CardContent>
          </Card>

          {/* Дресс-код */}
          <Card className="bg-gradient-to-br from-pink-100 to-yellow-100 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">👗</div>
              <h3 className="text-xl font-bold text-pink-800 mb-3">Дресс-код</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center text-pink-700">
                  <Icon name="Sparkles" size={14} className="mr-1" />
                  Гламурные наряды
                </div>
                <div className="flex items-center justify-center text-pink-700">
                  <Icon name="Heart" size={14} className="mr-1" />
                  Розовые и золотые оттенки
                </div>
                <div className="flex items-center justify-center text-pink-700">
                  <Icon name="Crown" size={14} className="mr-1" />
                  Аксессуары приветствуются
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Контакты */}
          <Card className="bg-gradient-to-br from-yellow-100 to-pink-100 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Контакты</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center text-yellow-700">
                  <Icon name="Phone" size={14} className="mr-1" />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center justify-center text-yellow-700">
                  <Icon name="MessageCircle" size={14} className="mr-1" />
                  @organizer_name
                </div>
                <div className="flex items-center justify-center text-yellow-700">
                  <Icon name="Mail" size={14} className="mr-1" />
                  party@example.com
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Программа */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-yellow-600 bg-clip-text text-transparent">
            Программа вечера
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-pink-50 to-white border-pink-200 hover-scale">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">🧖‍♀️</div>
                <h4 className="font-bold text-pink-800 mb-2">18:00 - 19:30</h4>
                <p className="text-pink-700 text-sm">SPA-процедуры и релакс</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-200 hover-scale">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">📸</div>
                <h4 className="font-bold text-yellow-800 mb-2">19:30 - 21:00</h4>
                <p className="text-yellow-700 text-sm">Фотосессия в стиле glam</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-pink-50 to-yellow-50 border-pink-200 hover-scale">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">🎉</div>
                <h4 className="font-bold text-pink-800 mb-2">21:00 - 00:00</h4>
                <p className="text-pink-700 text-sm">Вечеринка с играми и танцами</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Подтверждение участия */}
        <div className="text-center">
          <Card className="max-w-md mx-auto bg-gradient-to-br from-pink-200 to-yellow-200 border-none shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">Подтверди участие!</h3>
              <p className="text-pink-700 mb-6 text-sm">
                Пожалуйста, подтверди своё участие до 20 июля
              </p>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold py-3"
                  size="lg"
                >
                  <Icon name="Check" size={16} className="mr-2" />
                  Буду! 💕
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-pink-300 text-pink-700 hover:bg-pink-50"
                  size="lg"
                >
                  <Icon name="X" size={16} className="mr-2" />
                  Не смогу
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;