<?php

namespace App\Controller;

use App\Entity\Book;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/books')]
class BookController extends AbstractController
{

    /**
     * View Home books
     */
    #[Route('/', name: 'home')]
    public function list(EntityManagerInterface $em): Response {
        $books = $em->getRepository(Book::class)->findAll();
        return $this->render('book/home.html.twig', [
            'books' => $books,
        ]);
    }

    /**
     * Add book in the db
     */
    #[Route('/add', name: 'book_add')]
    public function addProduct(EntityManagerInterface $em) : Response {
        $book = new Book();
        $book
            ->setName('super nom')
            ->setCategory(1)
            ->setAvailable(1)
            ->setReader('elodie')
            ->setAuthor('bibi')
            ->setShortDescription('une super description')
        ;

        $em->persist($book);
        // Enregistrement en dbb
        $em->flush();
        return $this->render('book/add.html.twig');
    }

    /**
     * Update a book
     */
    #[Route('/update/{id}', name: 'book-update')]
    public function updateBook(Book $book, EntityManagerInterface $em): Response {
        $book->setName('Mon livre');
        $em->flush();
        return $this->render('book/update.html.twig');
    }

    /**
     * Delete a book
     */
    #[Route('/delete/{id}', name: 'book-delete')]
    public function deleteProduct(Book $book, EntityManagerInterface $em): Response {
        $em->remove($book);
        $em->flush();
        return $this->render('book/delete.html.twig');
    }

    /**
     * View a single book
     */
    #[Route('/view/{id}', name: 'book-view_first')]
    public function viewSingleBook(Book $book): Response {
        return $this->render('book/single.html.twig', [
            'book' => $book,
        ]);
    }

}
