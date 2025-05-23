import React from 'react';
import { ArrowLeft } from 'lucide-react';
import heroBackground from '../assets/images/hero.avif';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center" style={{
      background: `linear-gradient(rgba(255, 107, 157, 0.65), rgba(255, 107, 157, 0.75)), url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in animate-float">
              עיצוב הדור הבא של הספרים
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white font-medium max-w-lg animate-fade-in animate-pulse-slow leading-relaxed" style={{ animationDelay: '0.2s' }}>
              גם אתה רוצה להרוויח כסף מגיל צעיר ולהגשים חלום?<br />
              <span className="text-yellow-light font-semibold">בוא תהפוך את החלום שלך למקצוע !</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#programs" className="btn-secondary">
                התוכניות שלנו
                <ArrowLeft className="h-5 w-5" />
              </a>
              <a href="#contact" className="text-white border-2 border-white hover:bg-white hover:text-azul-primary font-semibold py-3 px-6 rounded-md transition-all duration-300 text-center">
                צור קשר
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in animate-float" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg max-w-md w-full transform hover:rotate-3 transition-transform duration-500">
              <div className="bg-yellow-light dark:bg-gray-700 rounded-lg p-6 border-2 border-yellow-primary transform hover:-rotate-6 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-azul-dark dark:text-white mb-4 font-display animate-pulse-slow">מתחילים בקרוב!</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">שיעורים חדשים ידידותיים למתחילים בגילאי 10-16 מתחילים בחודש הבא. מקומות מוגבלים זמינים.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-600 dark:text-gray-200">
                    <svg className="h-5 w-5 text-azul-primary dark:text-white mr-2 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    יסודות הספרות
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-200">
                    <svg className="h-5 w-5 text-azul-primary dark:text-white mr-2 animate-spin-slow" style={{ animationDelay: '0.3s' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    התאמנות על בובות מציאותיות
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-200">
                    <svg className="h-5 w-5 text-azul-primary dark:text-white mr-2 animate-spin-slow" style={{ animationDelay: '0.6s' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    כיתות קטנות עם תשומת לב אישית
                  </li>
                </ul>
                <a href="#contact" className="btn-primary w-full justify-center group">
                  שמור מקום
                  <span className="transform group-hover:scale-125 transition-transform duration-300">🔍</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#programs" 
          className="text-white animate-bounce"
          aria-label="גלול למטה לחלק התוכניות"
        >
          <svg 
            className="h-10 w-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
