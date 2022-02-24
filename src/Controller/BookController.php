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

    // Add product in the db
    #[Route('/add', name: 'add')]
    public function addProduct(EntityManagerInterface $em) : Response {
        $b = new Book();
        $b
            ->setName('super nom')
        ;

        $em->persist($b);

        // Enregistrement en dbb
        $em->flush();

        return $this->render('book/add.html.twig');
    }

    //Update a product
    #[Route('/update/{id}', name: 'update')]
    public function updateBook(Book $b, EntityManagerInterface $em): Response {
        $b->setName('Mon');

        $em->flush();

        return $this->render('book/update.html.twig');
    }

    //Delete a product
    #[Route('/delete/{id}', name: 'delete')]
    public function deleteProduct(Book $book, EntityManagerInterface $em): Response {
        $em->remove($book);
        $em->flush();
        return $this->render('book/delete.htm.twig');
    }

    // Read
    #[Route('/view/first', name: 'view_first')]
    public function viewSingleBook(EntityManagerInterface $em): Response {
        $bookRepository = $em->getRepository(Book::class);
        $b = $bookRepository->find(1);
        return $this->render('book\home.html.twig', [
            'product' => $b,
        ]);
    }
}