<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 *
 */
#[ORM\Entity(repositoryClass: CategoryRepository::class)]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\ManyToOne(targetEntity: Shelf::class, inversedBy: 'category', cascade: ['remove'])]
    #[ORM\JoinColumn(name: "shelfID", referencedColumnName: "id", onDelete: "CASCADE")]
    private $shelf;

    #[ORM\OneToMany(mappedBy: 'category', targetEntity: Book::class)]
    private $book;

    /**
     *
     */
    public function __construct()
    {
        $this->book = new ArrayCollection();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return $this
     */
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Shelf|null
     */
    public function getShelf(): ?Shelf
    {
        return $this->shelf;
    }

    /**
     * @param Shelf|null $shelf
     * @return $this
     */
    public function setShelf(?Shelf $shelf): self
    {
        $this->shelf = $shelf;

        return $this;
    }

    /**
     * @return Collection<int, Book>
     */
    public function getBook(): Collection
    {
        return $this->book;
    }

    /**
     * @param Book $book
     * @return $this
     */
    public function addBook(Book $book): self
    {
        if (!$this->book->contains($book)) {
            $this->book[] = $book;
            $book->setCategory($this);
        }

        return $this;
    }

    /**
     * @param Book $book
     * @return $this
     */
    public function removeBook(Book $book): self
    {
        if ($this->book->removeElement($book)) {
            // set the owning side to null (unless already changed)
            if ($book->getCategory() === $this) {
                $book->setCategory(null);
            }
        }

        return $this;
    }
}
