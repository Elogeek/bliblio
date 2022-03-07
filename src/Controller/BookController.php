<?php

namespace App\Controller;

use App\Entity\Book;
use App\Form\BookType;
use App\Repository\BookRepository;
use App\Repository\BorrowerRepository;
use App\Repository\CategoryRepository;
use DateInterval;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BookController extends AbstractController {

    /**
     * all book by id to category
     * @param int $idCategory
     * @param BookRepository $repository
     * @return Response
     */
    #[Route('/category-book/{idCategory}', name: 'book')]
    public function index(int $idCategory, BookRepository $repository): Response {

        $books = $repository->findBy(['category' => $idCategory]);
        return $this->render('book/index.html.twig', ["books" => $books]);
    }

    /** add a book
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @return Response
     */
    #[Route('/book/add', name: 'book_add')]
    public function add(Request $request, EntityManagerInterface $entityManager): Response {

        $book = new Book();
        $form = $this->createForm(BookType::class, $book);

        $form->handleRequest($request);

        $submittedToken = $request->request->get("csrf_token");

        if ($this->isCsrfTokenValid("book-add", $submittedToken)) {
            if ($form->isSubmitted() && $form->isValid()) {
                $file = $form->get('picture')->getData();
                $entityManager->persist($book);
                $entityManager->flush();
                $this->addFlash("success", "Le livre a été créé avec succès !");
                $id = $book->getCategory()->getId();
                return $this->redirect("/category-book/$id");
            }
        }
        return $this->render('book/add.html.twig', ['form' => $form->createView()]);
    }

    /**
     * display one book
     * @param int $idBook
     * @param BookRepository $repository
     * @return Response
     */
    #[Route('/book/{idBook}', name: 'book_one')]
    public function oneBook(int $idBook, BookRepository $repository): Response {

        $book = $repository->find($idBook);
        return $this->render('book/oneBook.html.twig', ["book" => $book]);
    }

    /**
     * update a book
     * @param Book $book
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @return Response
     */
    #[Route('/book/update/{id}', name: 'book_update')]
    public function update(Book $book, Request $request, EntityManagerInterface $entityManager): Response {

        $form = $this->createForm(BookType::class, $book);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash("success", "Le livre a été modifié avec succès ! !");
            $id = $book->getId();
            return $this->redirect("/book/$id");
        }
        return $this->render('book/update.html.twig', ['form' => $form->createView()]);
    }

    /**
     * add a borrower to book
     * @param Book $book
     * @param EntityManagerInterface $entityManager
     * @param BorrowerRepository $borrowerRepository
     * @return Response
     */
    #[Route('/book/update-borrower/{id}', name: 'book_update_borrower')]
    public function updateBorrower(Book $book, EntityManagerInterface $entityManager, BorrowerRepository $borrowerRepository): Response {

        $borrower = $borrowerRepository->find(1);

        $date = new \DateTime();

        $book->setBorrower($borrower);
        $book->setReserved($date);
        $date = date_create();
        date_add($date, date_interval_create_from_date_string('10 days'));
        $book->setRecovery($date);
        $entityManager->flush();

        $id = $book->getId();
        return $this->redirect("/book/$id");
    }
    // Delete borrower === render the book
    #[Route('/book/update-borrower-delete/{id}', name: 'book_update_borrower_delete_id')]
    public function updateBorrowerDelete(Book $book, EntityManagerInterface $entityManager): Response {

        $book->setBorrower(null);
        $book->setRecovery(null);
        $book->setReserved(null);
        $entityManager->flush();

        $id = $book->getId();
        return $this->redirect("/book/$id");
    }

    /**
     * delete a book
     * @param Book $book
     * @param EntityManagerInterface $entityManager
     * @param BookRepository $repository
     * @return Response
     */
    #[Route('/book/delete/{id}', name: 'book_delete')]
    public function delete(Book $book, EntityManagerInterface $entityManager, BookRepository $repository): Response {

        $repository->delete($book->getId());
        $id = $book->getCategory()->getId();
        return $this->redirect("/category-book/$id");
    }
}
