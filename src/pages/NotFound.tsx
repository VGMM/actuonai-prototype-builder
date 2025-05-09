
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-6xl font-bold text-navy mb-6">404</h1>
          <h2 className="text-3xl font-semibold text-navy mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-electric hover:bg-electric/90">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Homepage
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
