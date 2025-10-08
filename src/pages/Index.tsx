import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedPoem, setSelectedPoem] = useState<string | null>(null);

  const timelineEvents = [
    { 
      year: 1803, 
      title: 'Рождение', 
      description: 'Николай Михайлович Языков родился 4 марта 1803 года в Симбирске в старинной дворянской семье. Отец — Михаил Петрович Языков, состоятельный помещик. С раннего детства будущий поэт воспитывался в атмосфере культуры и образованности, имел доступ к обширной домашней библиотеке.',
      icon: 'Home',
      gradient: 'from-amber-100 to-amber-200'
    },
    { 
      year: 1822, 
      title: 'Университет', 
      description: 'Поступил в Дерптский (Тартуский) университет на философский факультет. В университете познакомился с будущими декабристами, участвовал в студенческих литературных кружках. Здесь начал активно писать стихи, которые сразу обратили на себя внимание современников своей свежестью и энергией.',
      icon: 'GraduationCap',
      gradient: 'from-blue-100 to-blue-200'
    },
    { 
      year: 1826, 
      title: 'Первые стихи', 
      description: 'Опубликованы первые поэтические произведения в петербургских журналах. Стихи Языкова были замечены Пушкиным и Жуковским. Его поэзия отличалась романтическим пафосом, воспеванием свободы и молодости. В этот период создал знаменитые студенческие песни.',
      icon: 'ScrollText',
      gradient: 'from-purple-100 to-purple-200'
    },
    { 
      year: 1831, 
      title: 'Расцвет творчества', 
      description: 'Период наиболее активной и плодотворной творческой деятельности. Языков создает свои лучшие лирические произведения, элегии и послания. Близко общается с Пушкиным, Гоголем, Киреевским. Его поэзия достигает зрелости, сочетая романтический порыв с философским осмыслением жизни.',
      icon: 'Star',
      gradient: 'from-yellow-100 to-yellow-200'
    },
    { 
      year: 1846, 
      title: 'Уход из жизни', 
      description: 'Скончался 26 декабря 1846 года в Москве после продолжительной болезни. Последние годы жизни провел в путешествиях по Европе, лечился на водах. Похоронен в Симбирске. Оставил после себя богатое поэтическое наследие, высоко оцененное современниками и потомками.',
      icon: 'Church',
      gradient: 'from-gray-100 to-gray-200'
    }
  ];

  const works = [
    { 
      title: 'Водопад', 
      year: 1830, 
      quote: 'Шуми, шуми с крутой вершины...',
      description: 'Одно из самых известных стихотворений Языкова, воспевающее величие природы и силу стихий. Поэт использует яркие образы и динамичный ритм для передачи мощи водопада.'
    },
    { 
      title: 'Элегия', 
      year: 1824, 
      quote: 'Блажен, кто мог на миг хоть брать...',
      description: 'Философская элегия о быстротечности жизни и ценности каждого мгновения. Отражает романтическое мировоззрение молодого поэта и его размышления о смысле бытия.'
    },
    { 
      title: 'Пловец', 
      year: 1829, 
      quote: 'Нелюдимо наше море...',
      description: 'Стихотворение-метафора о жизненном пути человека, его борьбе со стихией судьбы. Считается одним из лучших образцов романтической лирики Языкова.'
    },
    { 
      title: 'Землетрясение', 
      year: 1828, 
      quote: 'И всё дрожит, и стонет всё...',
      description: 'Драматическое произведение, в котором поэт через описание природной катастрофы передает трагические потрясения человеческой души и общественной жизни.'
    },
    {
      title: 'Моя родина',
      year: 1825,
      quote: 'Мой друг! Что может быть милей...',
      description: 'Лирическое стихотворение о любви к родной земле, к Волге и Симбирску. Пронизано теплыми воспоминаниями детства и юности.'
    },
    {
      title: 'Тригорское',
      year: 1826,
      quote: 'Тригорское! Тригорское!',
      description: 'Посвящено имению Осиповых-Вульф, где Языков гостил вместе с Пушкиным. Стихотворение воспевает дружбу, поэзию и радость жизни.'
    }
  ];

  const facts = [
    'Был близким другом А.С. Пушкина и входил в его литературный круг. Пушкин высоко ценил поэзию Языкова, называл его «первым из наших элегических поэтов». Языков посвятил Пушкину несколько восторженных стихотворений.',
    'Учился в Дерптском (Тартуском) университете вместе с будущими декабристами. Был дружен с М.А. Бакуниным, И.В. Киреевским. Студенческие годы оказали большое влияние на формирование его вольнолюбивых взглядов.',
    'Его поэзию высоко ценили В.Г. Белинский и Н.В. Гоголь. Белинский отмечал «необыкновенную энергию выражения» в стихах Языкова. Гоголь восхищался музыкальностью и образностью его поэзии.',
    'Последние годы жизни провел в путешествиях по Европе, лечился на минеральных водах в Германии и Италии. Несмотря на болезнь, продолжал писать стихи, в которых звучали мотивы тоски по родине.',
    'Его брат Александр Языков также был известным поэтом. Братья поддерживали творческую переписку, обменивались стихами и литературными новостями.',
    'Языков был мастером «легкой поэзии» — писал застольные песни, послания друзьям, шуточные стихотворения. Эти произведения отличались остроумием, живостью и непринужденностью стиля.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-primary-foreground">
              Николай Языков
            </h1>
            <div className="hidden md:flex gap-8">
              {['Биография', 'Творчество', 'Произведения', 'Галерея'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg text-primary-foreground/80 hover:text-primary-foreground transition-colors font-georgia"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="py-32 px-6 bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground">
        <div className="container mx-auto text-center animate-fade-in">
          <Icon name="Feather" size={96} className="mx-auto mb-8 opacity-80" />
          <h2 className="text-6xl md:text-8xl font-playfair font-bold mb-6">
            Николай Михайлович Языков
          </h2>
          <p className="text-3xl md:text-4xl font-georgia opacity-90 mb-4">
            1803 — 1846
          </p>
          <p className="text-xl md:text-2xl font-georgia opacity-80 max-w-3xl mx-auto leading-relaxed">
            Русский поэт пушкинской эпохи, мастер лирической поэзии
          </p>
        </div>
      </section>

      <section id="timeline" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-20 text-primary">
            Временная шкала жизни и творчества
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-secondary/30"></div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <Card 
                      className="cursor-pointer transition-all hover:shadow-xl hover:scale-105 border-secondary/20 overflow-hidden"
                      onClick={() => setSelectedYear(selectedYear === event.year ? null : event.year)}
                    >
                      <div className={`h-64 bg-gradient-to-br ${event.gradient} flex items-center justify-center relative`}>
                        <Icon name={event.icon} size={100} className="text-secondary/30" />
                        <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white/80 flex items-center justify-center shadow-xl">
                          <Icon name="User" size={40} className="text-secondary" />
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="font-playfair text-secondary text-3xl">{event.year}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-georgia font-semibold mb-3 text-xl">{event.title}</h4>
                        {selectedYear === event.year && (
                          <p className="text-base text-muted-foreground animate-fade-in mt-4 pt-4 border-t leading-relaxed">
                            {event.description}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-secondary border-4 border-background shadow-xl"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="биография" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in">
              <h3 className="text-5xl md:text-6xl font-playfair font-bold mb-8 text-primary">
                Биография
              </h3>
              <div className="space-y-6 font-georgia text-lg text-foreground/90 leading-relaxed">
                <p>
                  Николай Михайлович Языков родился в 1803 году в Симбирске (ныне Ульяновск) 
                  в старинной дворянской семье. С детства проявлял интерес к литературе и поэзии. 
                  Отец, Михаил Петрович, был образованным человеком и собрал обширную библиотеку.
                </p>
                <p>
                  В 1822 году поступил в Дерптский университет, где познакомился с будущими 
                  декабристами и активно участвовал в студенческой жизни. Именно в этот период 
                  начал писать свои первые стихотворения, которые сразу обратили на себя внимание 
                  литературной общественности.
                </p>
                <p>
                  Языков был близким другом А.С. Пушкина и входил в его литературный круг. 
                  Его поэзия отличалась яркой образностью, музыкальностью и глубоким лиризмом. 
                  В 1830-е годы создал свои лучшие произведения, среди которых «Водопад», 
                  «Пловец», «Тригорское».
                </p>
                <p>
                  Последние годы жизни поэт боролся с тяжелой болезнью, путешествовал по Европе в поисках 
                  исцеления. Скончался в 1846 году в Москве, оставив значительное поэтическое наследие.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-[500px] rounded-lg overflow-hidden border-4 border-secondary/30 shadow-2xl">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Yazykov.jpg/800px-Yazykov.jpg" 
                  alt="Портрет Николая Михайловича Языкова"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/30 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary/50"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/></svg></div>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="произведения" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-20 text-primary">
            Избранные произведения
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {works.map((work, index) => (
              <Card 
                key={work.title}
                className="hover:shadow-xl transition-shadow border-secondary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="font-playfair text-secondary flex items-center gap-3 text-2xl">
                    <Icon name="Pen" size={28} />
                    {work.title}
                  </CardTitle>
                  <p className="text-base text-muted-foreground font-georgia mt-2">{work.year} год</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="italic font-georgia text-lg text-foreground/80">
                    "{work.quote}"
                  </p>
                  <p className="text-base font-georgia text-foreground/70 leading-relaxed">
                    {work.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="галерея" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-20 text-primary">
            Интересные факты
          </h3>
          <div className="max-w-5xl mx-auto space-y-8">
            {facts.map((fact, index) => (
              <Card 
                key={index}
                className="border-l-8 border-secondary hover:shadow-xl transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="py-8 px-8">
                  <div className="flex gap-6 items-start">
                    <Icon name="Sparkles" size={36} className="text-secondary flex-shrink-0 mt-1" />
                    <p className="font-georgia text-lg text-foreground/90 leading-relaxed">{fact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-20 text-primary">
            Галерея
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Yazykov.jpg/800px-Yazykov.jpg"
                alt="Портрет Н.М. Языкова"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-80 bg-gradient-to-br from-primary/20 via-secondary/30 to-primary/40 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary/60"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><div class="py-4 px-6"><p class="font-georgia text-center text-muted-foreground">Портрет Н.М. Языкова</p></div>';
                }}
              />
              <CardContent className="py-4">
                <p className="font-georgia text-center text-muted-foreground">Портрет Н.М. Языкова</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Simbirsk_late_XIX.jpg/1024px-Simbirsk_late_XIX.jpg"
                alt="Симбирск в XIX веке"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-80 bg-gradient-to-br from-secondary/20 via-primary/30 to-secondary/40 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary/60"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg></div><div class="py-4 px-6"><p class="font-georgia text-center text-muted-foreground">Симбирск, родина поэта</p></div>';
                }}
              />
              <CardContent className="py-4">
                <p className="font-georgia text-center text-muted-foreground">Симбирск в XIX веке, родина поэта</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Tartu_%C3%9Clikool.jpg/1024px-Tartu_%C3%9Clikool.jpg"
                alt="Дерптский университет (Тарту)"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-80 bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/50 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary/60"><circle cx="12" cy="10" r="1"/><path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"/><path d="M6 17v.01"/><path d="M6 13v.01"/><path d="M18 17v.01"/><path d="M18 13v.01"/><path d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"/></svg></div><div class="py-4 px-6"><p class="font-georgia text-center text-muted-foreground">Дерптский университет</p></div>';
                }}
              />
              <CardContent className="py-4">
                <p className="font-georgia text-center text-muted-foreground">Дерптский университет, где учился Языков</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-5xl md:text-6xl font-playfair font-bold text-center mb-20 text-primary">
            Полные тексты стихотворений
          </h3>
          <div className="space-y-8">
            <Card className="border-secondary/30">
              <CardHeader>
                <CardTitle className="text-3xl font-playfair text-secondary flex items-center justify-between">
                  <span>Пловец</span>
                  <button 
                    onClick={() => setSelectedPoem(selectedPoem === 'plovets' ? null : 'plovets')}
                    className="text-sm font-georgia text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {selectedPoem === 'plovets' ? 'Свернуть' : 'Читать'}
                  </button>
                </CardTitle>
                <p className="text-muted-foreground font-georgia">1829</p>
              </CardHeader>
              {selectedPoem === 'plovets' && (
                <CardContent className="animate-fade-in">
                  <div className="font-georgia text-lg leading-relaxed space-y-4 text-foreground/90">
                    <p className="italic">
                      Нелюдимо наше море,<br/>
                      День и ночь шумит оно;<br/>
                      В роковом его просторе<br/>
                      Много бед погребено.<br/>
                    </p>
                    <p className="italic">
                      Смело, братья! Бурей полный,<br/>
                      Прям и крепок парус мой.<br/>
                      Швед ли, север ли бездомный,—<br/>
                      Он меня домчит домой!<br/>
                    </p>
                    <p className="text-sm text-muted-foreground mt-6">
                      Стихотворение является метафорой жизненного пути, где море символизирует судьбу, 
                      а пловец — человека, смело противостоящего стихиям.
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>

            <Card className="border-secondary/30">
              <CardHeader>
                <CardTitle className="text-3xl font-playfair text-secondary flex items-center justify-between">
                  <span>Тригорское</span>
                  <button 
                    onClick={() => setSelectedPoem(selectedPoem === 'trigorskoe' ? null : 'trigorskoe')}
                    className="text-sm font-georgia text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {selectedPoem === 'trigorskoe' ? 'Свернуть' : 'Читать'}
                  </button>
                </CardTitle>
                <p className="text-muted-foreground font-georgia">1826</p>
              </CardHeader>
              {selectedPoem === 'trigorskoe' && (
                <CardContent className="animate-fade-in">
                  <div className="font-georgia text-lg leading-relaxed space-y-4 text-foreground/90">
                    <p className="italic">
                      Тригорское! Тригорское!<br/>
                      Где ты? далеко ли? близко ль?<br/>
                      Приют мой радушный и милый!<br/>
                      Смеюся ль, грущу ли, пою ли,—<br/>
                      Всегда о тебе я мечтаю!<br/>
                    </p>
                    <p className="text-sm text-muted-foreground mt-6">
                      Посвящено имению Осиповых-Вульф, где Языков гостил вместе с Пушкиным. 
                      Стихотворение воспевает дружбу, радость жизни и поэзию.
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>

            <Card className="border-secondary/30">
              <CardHeader>
                <CardTitle className="text-3xl font-playfair text-secondary flex items-center justify-between">
                  <span>Элегия (1824)</span>
                  <button 
                    onClick={() => setSelectedPoem(selectedPoem === 'elegia' ? null : 'elegia')}
                    className="text-sm font-georgia text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {selectedPoem === 'elegia' ? 'Свернуть' : 'Читать'}
                  </button>
                </CardTitle>
                <p className="text-muted-foreground font-georgia">1824</p>
              </CardHeader>
              {selectedPoem === 'elegia' && (
                <CardContent className="animate-fade-in">
                  <div className="font-georgia text-lg leading-relaxed space-y-4 text-foreground/90">
                    <p className="italic">
                      Блажен, кто мог на миг хоть брать<br/>
                      У вечности права,<br/>
                      Кто дерзостно умел играть<br/>
                      Ее глубокими словами!<br/>
                    </p>
                    <p className="text-sm text-muted-foreground mt-6">
                      Философская элегия о быстротечности жизни и ценности каждого мгновения. 
                      Отражает романтическое мировоззрение молодого поэта.
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto text-center">
          <Separator className="mb-8 bg-primary-foreground/20" />
          <p className="font-georgia text-lg opacity-80">
            © 2024 Сайт посвящен памяти великого русского поэта Николая Михайловича Языкова
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;