<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JetBrains\PhpStorm\Pure;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
class Category {

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\ManyToOne(targetEntity: Shelf::class, inversedBy: 'categories')]
    #[ORM\JoinColumn(nullable: false)]
    private $Shelf;

    #[ORM\OneToMany(mappedBy: 'category', targetEntity: Book::class)]
    private $books;

    public function __construct() {
        $this->books = new ArrayCollection();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getName(): ?string {
        return $this->name;
    }

    /**
     * @param string $name
     * @return $this
     */
    public function setName(string $name): self {
        $this->name = $name;
        return $this;
    }

    /**
     * @return Shelf|null
     */
    public function getShelf(): ?Shelf {
        return $this->Shelf;
    }

    /**
     * @param Shelf|null $Shelf
     * @return $this
     */
    public function setShelf(?Shelf $Shelf): self{
        $this->Shelf = $Shelf;
        return $this;
    }

    /**
     * @return Collection<int, Book>
     */
    public function getBooks(): Collection {
        return $this->books;
    }

    /**
     * Add book in the category
     * @param Book $book
     * @return $this
     */
    public function addBook(Book $book): self {

        if (!$this->books->contains($book)) {
            $this->books[] = $book;
            $book->setCategory($this);
        }

        return $this;
    }

    /**
     * Remove book in the category
     * @param Book $book
     * @return $this
     */
    public function removeBook(Book $book): self {

        if ($this->books->removeElement($book)) {
            // set the owning side to null (unless already changed)
            if ($book->getCategory() === $this) {
                $book->setCategory(null);
            }
        }

        return $this;
    }

}
