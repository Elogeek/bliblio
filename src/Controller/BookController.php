<?php
use App\Entity\Book;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/book', name: 'book_')]

class BookController extends AbstractController {

    // To have it easier
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em) {
        $this->em = $em;
    }

    /**
     * Add product in the db
     */
    #[Route('/add', name: 'add')]
    public function addProduct(EntityManagerInterface $em) : Response {
        $book = new Book();
        $book
            ->setName('super nom')
            ->setCategory()
            ->setAvailable(1)
            ->setReader('')
            ->setAuthor('bibi')
            ->setShortDescription('une super description')
        ;

        $em->persist($book);

        // Enregistrement en dbb
        $em->flush();

        return $this->render('book/add.html.twig');
    }

    /**
     * Update a product
     */
    #[Route('/update/{id}', name: 'update')]
    public function updateBook(Book $book, EntityManagerInterface $em): Response {
        $book->setName('Mon livre');

        $em->flush();

        return $this->render('book/update.html.twig');
    }

    /**
     * Delete a product
     */
    #[Route('/delete/{id}', name: 'delete')]
    public function deleteProduct(Book $book, EntityManagerInterface $em): Response {
        $em->remove($book);
        $em->flush();
        return $this->render('book/delete.html.twig');
    }

    /**
     * Read a single book
     */
    #[Route('/view/{id}', name: 'view_first')]
    public function viewSingleBook(Book $book): Response {

        return $this->render('book/single.html.twig', [
            'book' => $book,
        ]);
    }

    /**
     * Read all book
     */
    #[Route('view/all', name: 'view-all')]
    public function viewAllBooks(EntityManagerInterface $em): Response {
        $books = $em->getRepository(Book::class)->findAll();
        return $this->render('book/home.html.twig', [
            'books' => $books,
        ]);
    }

}