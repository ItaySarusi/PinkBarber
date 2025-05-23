import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-azul-dark dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scissors className="h-6 w-6 text-yellow-primary dark:text-yellow-light ml-2" />
              <span className="text-xl font-bold font-display">Pink Barber</span>
            </div>
            <p className="mb-4 text-gray-300 dark:text-gray-400">
              מעצימים את הדור הבא של ספרים באמצעות תוכניות מהנות, חינוכיות ומעשיות המותאמות במיוחד לילדים.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.instagram.com/_pinkbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-azul-primary dark:text-gray-400 dark:hover:text-yellow-primary transition-colors"
                aria-label="עקבו אחרינו באינסטגרם"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-display dark:text-white">תוכניות</h3>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-gray-300 hover:text-yellow-primary dark:text-gray-400 dark:hover:text-yellow-light transition-colors">יסודות ספרות לצעירים</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-yellow-primary dark:text-gray-400 dark:hover:text-yellow-light transition-colors">אקדמיית עיצוב לנוער</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-yellow-primary dark:text-gray-400 dark:hover:text-yellow-light transition-colors">טכניקות מתקדמות</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-yellow-primary dark:text-gray-400 dark:hover:text-yellow-light transition-colors">מחנות קיץ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-display dark:text-white">עלינו</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-primary dark:text-gray-400 dark:hover:text-yellow-light transition-colors">הסיפור שלנו</a></li>
              <li><a href="#instructors" className="text-gray-300 hover:text-yellow-primary dark:text-gray-400 dark:hover:text-yellow-light transition-colors">הצוות שלנו</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-primary dark:text-gray-400 dark:hover:text-yellow-light transition-colors">קריירה</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-yellow-primary dark:text-gray-400 dark:hover:text-yellow-light transition-colors">המלצות</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-display dark:text-white">צור קשר</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 dark:text-gray-400">רחוב הספרים 123, דירה 101<br />תל אביב, ישראל</li>
              <li><a href="tel:03-123-4567" className="text-gray-300 hover:text-yellow-primary dark:text-gray-400 dark:hover:text-yellow-light transition-colors">03-123-4567</a></li>
              <li><a href="mailto:info@pinkbarber.com" className="text-gray-300 hover:text-yellow-primary dark:text-gray-400 dark:hover:text-yellow-light transition-colors">info@pinkbarber.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pink Barber. כל הזכויות שמורות.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-yellow-primary dark:hover:text-yellow-light transition-colors">מדיניות פרטיות</a> | 
            <a href="#" className="hover:text-yellow-primary dark:hover:text-yellow-light transition-colors mr-2">תנאי שימוש</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
