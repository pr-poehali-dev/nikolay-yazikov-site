import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const timelineEvents = [
    { 
      year: 1803, 
      title: 'Рождение', 
      description: 'Родился в Симбирске в дворянской семье',
      icon: 'Home',
      gradient: 'from-amber-100 to-amber-200'
    },
    { 
      year: 1822, 
      title: 'Университет', 
      description: 'Поступил в Дерптский университет',
      icon: 'GraduationCap',
      gradient: 'from-blue-100 to-blue-200'
    },
    { 
      year: 1826, 
      title: 'Первые стихи', 
      description: 'Опубликованы первые поэтические произведения',
      icon: 'ScrollText',
      gradient: 'from-purple-100 to-purple-200'
    },
    { 
      year: 1831, 
      title: 'Расцвет творчества', 
      description: 'Период наиболее активной творческой деятельности',
      icon: 'Star',
      gradient: 'from-yellow-100 to-yellow-200'
    },
    { 
      year: 1846, 
      title: 'Уход из жизни', 
      description: 'Скончался в Москве',
      icon: 'Church',
      gradient: 'from-gray-100 to-gray-200'
    }
  ];

  const works = [
    { title: 'Водопад', year: 1830, quote: 'Шуми, шуми с крутой вершины...' },
    { title: 'Элегия', year: 1824, quote: 'Блажен, кто мог на миг хоть брать...' },
    { title: 'Пловец', year: 1829, quote: 'Нелюдимо наше море...' },
    { title: 'Землетрясение', year: 1828, quote: 'И всё дрожит, и стонет всё...' }
  ];

  const facts = [
    'Был другом А.С. Пушкина и входил в его литературный круг',
    'Учился в Дерптском университете вместе с будущими декабристами',
    'Его поэзию высоко ценили В.Г. Белинский и Н.В. Гоголь',
    'Последние годы жизни провел в путешествиях по Европе'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-playfair font-bold text-primary-foreground">
              Николай Языков
            </h1>
            <div className="hidden md:flex gap-6">
              {['Биография', 'Творчество', 'Произведения', 'Галерея'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-georgia"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground">
        <div className="container mx-auto text-center animate-fade-in">
          <Icon name="Feather" size={64} className="mx-auto mb-6 opacity-80" />
          <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-4">
            Николай Михайлович Языков
          </h2>
          <p className="text-xl md:text-2xl font-georgia opacity-90 mb-2">
            1803 — 1846
          </p>
          <p className="text-lg font-georgia opacity-80 max-w-2xl mx-auto">
            Русский поэт пушкинской эпохи, мастер лирической поэзии
          </p>
        </div>
      </section>

      <section id="timeline" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-playfair font-bold text-center mb-12 text-primary">
            Временная шкала жизни и творчества
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/30"></div>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card 
                      className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-secondary/20 overflow-hidden"
                      onClick={() => setSelectedYear(selectedYear === event.year ? null : event.year)}
                    >
                      <div className={`h-48 bg-gradient-to-br ${event.gradient} flex items-center justify-center relative`}>
                        <Icon name={event.icon} size={80} className="text-secondary/30" />
                        <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-lg">
                          <Icon name="User" size={32} className="text-secondary" />
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="font-playfair text-secondary text-2xl">{event.year}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-georgia font-semibold mb-2 text-lg">{event.title}</h4>
                        {selectedYear === event.year && (
                          <p className="text-sm text-muted-foreground animate-fade-in mt-3 pt-3 border-t">
                            {event.description}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-5 h-5 rounded-full bg-secondary border-4 border-background shadow-lg"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="биография" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h3 className="text-4xl font-playfair font-bold mb-6 text-primary">
                Биография
              </h3>
              <div className="space-y-4 font-georgia text-foreground/90 leading-relaxed">
                <p>
                  Николай Михайлович Языков родился в 1803 году в Симбирске (ныне Ульяновск) 
                  в старинной дворянской семье. С детства проявлял интерес к литературе и поэзии.
                </p>
                <p>
                  В 1822 году поступил в Дерптский университет, где познакомился с будущими 
                  декабристами и активно участвовал в студенческой жизни. Именно в этот период 
                  начал писать свои первые стихотворения.
                </p>
                <p>
                  Языков был близким другом А.С. Пушкина и входил в его литературный круг. 
                  Его поэзия отличалась яркой образностью, музыкальностью и глубоким лиризмом.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center border-2 border-secondary/30 shadow-xl">
                <Icon name="BookOpen" size={120} className="text-secondary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="произведения" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-playfair font-bold text-center mb-12 text-primary">
            Избранные произведения
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {works.map((work, index) => (
              <Card 
                key={work.title}
                className="hover:shadow-lg transition-shadow border-secondary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="font-playfair text-secondary flex items-center gap-2">
                    <Icon name="Pen" size={20} />
                    {work.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-georgia">{work.year} год</p>
                </CardHeader>
                <CardContent>
                  <p className="italic font-georgia text-foreground/80">
                    "{work.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="галерея" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-playfair font-bold text-center mb-12 text-primary">
            Интересные факты
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {facts.map((fact, index) => (
              <Card 
                key={index}
                className="border-l-4 border-secondary hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="py-6">
                  <div className="flex gap-4 items-start">
                    <Icon name="Sparkles" size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <p className="font-georgia text-foreground/90">{fact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <Separator className="mb-6 bg-primary-foreground/20" />
          <p className="font-georgia opacity-80">
            © 2024 Сайт посвящен памяти великого русского поэта Николая Михайловича Языкова
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;